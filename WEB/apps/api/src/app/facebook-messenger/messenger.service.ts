import { Injectable, HttpService, HttpCode, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { environment as env } from '@env-api/environment';

@Injectable()
export class MessengerService {

    /*
    * Be sure to setup your config values before running this code. You can
    * set them using environment constiables or modifying the config file in /config.
    *
    */

    // App Secret can be retrieved from the App Dashboard
    private APP_SECRET: string;

    // Arbitrary value used to validate a webhook
    private VALIDATION_TOKEN: string;

    // Generate a page access token for your page from the App Dashboard
    private PAGE_ACCESS_TOKEN: string;;

    // URL where the app is running (include protocol). Used to point to scripts and
    // assets located at this address.
    private SERVER_URL: string;

    constructor(
        private readonly httpService: HttpService
    ) {
        const config = require('./facebook-config.json');

        this.APP_SECRET = config['appSecret'];
        this.VALIDATION_TOKEN = config['validationToken'];
        this.SERVER_URL = config['serverURL'];
        this.PAGE_ACCESS_TOKEN = config['pageAccessToken'];

        if (!(this.APP_SECRET && this.VALIDATION_TOKEN
            && this.PAGE_ACCESS_TOKEN && this.SERVER_URL)) {
            console.error("Missing config values");
        }
    }

    async hello() {
        return {
            1: this.APP_SECRET,
            2: this.VALIDATION_TOKEN,
            3: this.SERVER_URL,
            4: this.PAGE_ACCESS_TOKEN,
        }
    }

    async webhook_get(mode: string, token: string, challenge: string) {
        if (mode === 'subscribe' && token === this.VALIDATION_TOKEN) {
            console.log("Validating webhook");
            return challenge;
        } else {
            console.log(mode)
            throw new ForbiddenException();
        }
    }

    async webhook_post(data: any) {
        console.log(data);
        if (data.object === 'page') {
            // Iterate over each entry
            // There may be multiple if batched
            for (const pageEntry of data.entry) {
                const pageID = pageEntry.id;
                const timeOfEvent = pageEntry.time;
                if (pageEntry.messaging == null) continue
                for (const messagingEvent of pageEntry.messaging) {
                    
                    if (messagingEvent.optin) {
                        this.receivedAuthentication(messagingEvent);
                    } else if (messagingEvent.message) {
                        this.receivedMessage(messagingEvent);
                    } else if (messagingEvent.delivery) {
                        this.receivedDeliveryConfirmation(messagingEvent);
                    } else if (messagingEvent.postback) {
                        this.receivedPostback(messagingEvent);
                    } else if (messagingEvent.read) {
                        this.receivedMessageRead(messagingEvent);
                    } else if (messagingEvent.account_linking) {
                        this.receivedAccountLink(messagingEvent);
                    } else {
                        console.log("Webhook received unknown messagingEvent: ", messagingEvent);
                    }
                }
            }
        }
            
        // Assume all went well.
        //
        // You must send back a 200, within 20 seconds, to let us know you've
        // successfully received the callback. Otherwise, the request will time out.
        return true
        
    }
    
    /*
    * Authorization Event
    *
    * The value for 'optin.ref' is defined in the entry point. For the "Send to
    * Messenger" plugin, it is the 'data-ref' field. Read more at
    * https://developers.facebook.com/docs/messenger-platform/webhook-reference/authentication
    *
    */
    private receivedAuthentication(event) {
        const senderID = event.sender.id;
        const recipientID = event.recipient.id;
        const timeOfAuth = event.timestamp;
      
        // The 'ref' field is set in the 'Send to Messenger' plugin, in the 'data-ref'
        // The developer can set this to an arbitrary value to associate the
        // authentication callback with the 'Send to Messenger' click event. This is
        // a way to do account linking when the user clicks the 'Send to Messenger'
        // plugin.
        const passThroughParam = event.optin.ref;
      
        console.log("Received authentication for user %d and page %d with pass " +
          "through param '%s' at %d", senderID, recipientID, passThroughParam,
          timeOfAuth);
      
        // When an authentication is received, we'll send a message back to the sender
        // to let them know it was successful.
        this.sendTextMessage(senderID, "Authentication successful");
    }

    /*
    * Message Event
    *
    * This event is called when a message is sent to your page. The 'message'
    * object format can consty depending on the kind of message that was received.
    * Read more at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received
    *
    * For this example, we're going to echo any text that we get. If we get some
    * special keywords ('button', 'generic', 'receipt'), then we'll send back
    * examples of those bubbles to illustrate the special message bubbles we've
    * created. If we receive a message with an attachment (image, video, audio),
    * then we'll simply confirm that we've received the attachment.
    *
    */
    private receivedMessage(event) {
        const senderID = event.sender.id;
        const recipientID = event.recipient.id;
        const timeOfMessage = event.timestamp;
        const message = event.message;
    
        console.log("Received message for user %d and page %d at %d with message:",
        senderID, recipientID, timeOfMessage);
        console.log(JSON.stringify(message));
    
        const isEcho = message.is_echo;
        const messageId = message.mid;
        const appId = message.app_id;
        const metadata = message.metadata;
    
        // You may get a text or attachment but not both
        const messageText = message.text;
        const messageAttachments = message.attachments;
        const quickReply = message.quick_reply;
    
        if (isEcho) {
        // Just logging message echoes to console
        console.log("Received echo for message %s and app %d with metadata %s",
            messageId, appId, metadata);
        return;
        } else if (quickReply) {
        const quickReplyPayload = quickReply.payload;
        console.log("Quick reply for message %s with payload %s",
            messageId, quickReplyPayload);
    
        this.sendTextMessage(senderID, "Quick reply tapped");
        return;
        }
    
        if (messageText) {
    
            // If we receive a text message, check to see if it matches any special
            // keywords and send back the corresponding example. Otherwise, just echo
            // the text we received.
            this.sendTextMessage(senderID, messageText);

        } else if (messageAttachments) {
            this.sendTextMessage(senderID, "Message with attachment received");
        }
    }


    /*
    * Delivery Confirmation Event
    *
    * This event is sent to confirm the delivery of a message. Read more about
    * these fields at https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-delivered
    *
    */
    private receivedDeliveryConfirmation(event) {
        const senderID = event.sender.id;
        const recipientID = event.recipient.id;
        const delivery = event.delivery;
        const messageIDs = delivery.mids;
        const watermark = delivery.watermark;
        const sequenceNumber = delivery.seq;
    
        if (messageIDs) {
        messageIDs.forEach(function(messageID) {
            console.log("Received delivery confirmation for message ID: %s",
            messageID);
        });
        }
    
        console.log("All message before %d were delivered.", watermark);
    }

    /*
    * Postback Event
    *
    * This event is called when a postback is tapped on a Structured Message.
    * https://developers.facebook.com/docs/messenger-platform/webhook-reference/postback-received
    *
    */
    private receivedPostback(event) {
        const senderID = event.sender.id;
        const recipientID = event.recipient.id;
        const timeOfPostback = event.timestamp;
    
        // The 'payload' param is a developer-defined field which is set in a postback
        // button for Structured Messages.
        const payload = event.postback.payload;
    
        console.log("Received postback for user %d and page %d with payload '%s' " +
        "at %d", senderID, recipientID, payload, timeOfPostback);
    
        // When a postback is called, we'll send a message back to the sender to
        // let them know it was successful
        this.sendTextMessage(senderID, "Postback called");
    }

    /*
    * Message Read Event
    *
    * This event is called when a previously-sent message has been read.
    * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-read
    *
    */
    private receivedMessageRead(event) {
        const senderID = event.sender.id;
        const recipientID = event.recipient.id;
    
        // All messages before watermark (a timestamp) or sequence have been seen.
        const watermark = event.read.watermark;
        const sequenceNumber = event.read.seq;
    
        console.log("Received message read event for watermark %d and sequence " +
        "number %d", watermark, sequenceNumber);
    }

    /*
    * Account Link Event
    *
    * This event is called when the Link Account or UnLink Account action has been
    * tapped.
    * https://developers.facebook.com/docs/messenger-platform/webhook-reference/account-linking
    *
    */
    private receivedAccountLink(event) {
        const senderID = event.sender.id;
        const recipientID = event.recipient.id;
    
        const status = event.account_linking.status;
        const authCode = event.account_linking.authorization_code;
    
        console.log("Received account link event with for user %d with status %s " +
        "and auth code %s ", senderID, status, authCode);
    }

    private sendHiMessage(recipientId) {
        const messageData = {
            recipient: {
                id: recipientId
            },
            message: {
                text: `
      Congrats on setting up your Messenger Bot!
      
      Right now, your bot can only respond to a few words. Try out "quick reply", "typing on", "button", or "image" to see how they work. You'll find a complete list of these commands in the "app.js" file. Anything else you type will just be mirrored until you create additional commands.
      
      For more details on how to create commands, go to https://developers.facebook.com/docs/messenger-platform/reference/send-api.
            `
            }
        }
      
        this.callSendAPI(messageData);
    }
    
    /*
    * Send an image using the Send API.
    *
    */
    private sendImageMessage(recipientId, url) {
        const messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
            type: "image",
            payload: {
                url: url
            }
            }
        }
        };
    
        this.callSendAPI(messageData);
    }
    
    /*
    * Send a text message using the Send API.
    *
    */
    private sendTextMessage(recipientId, messageText) {
        const messageData = {
            recipient: {
                id: recipientId
            },
            message: {
                text: messageText,
                metadata: "DEVELOPER_DEFINED_METADATA"
            }
        };
        this.callSendAPI(messageData);
    }

    /*
    * Call the Send API. The message data goes in the body. If successful, we'll
    * get the message id in a response
    *
    */
    private async callSendAPI(messageData: any) {
        this.httpService.post(
            'https://graph.facebook.com/v2.6/me/messages',
            messageData,
            {
                params: { access_token: this.PAGE_ACCESS_TOKEN }
            }
        ).subscribe(
            res => {
                const recipientId = res.data.recipient_id;
                const messageId = res.data.message_id;

                if (messageId) {
                    console.log("Successfully sent message with id %s to recipient %s",
                    messageId, recipientId);
                } else {
                console.log("Successfully called Send API for recipient %s",
                    recipientId);
                }
            },
            err => {
                console.error(
                    "Failed calling Send API",
                    err
                );
            },
            () => console.log('HTTP request completed.')
        )
    }
    
}
