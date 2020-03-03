import { Injectable, HttpService } from '@nestjs/common';
import { GoogleAuth } from 'google-auth-library';
import { chat_v1, discovery_v1 } from 'googleapis';
import { environment as env } from '@env-api/environment';

@Injectable()
export class HangOutsService {

    private auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/chat.bot',
        keyFile: env.auth.GOOGLE_APPLICATION_CREDENTIALS,
      });
      

    constructor(private readonly httpService: HttpService) {
        
    }

    async hello() {
        const client = await this.auth.getClient();
        const url = `https://chat.googleapis.com/v1/spaces/`;
        let res: any;
        try {
            res = await client.request(
                {
                    method: 'GET',
                    url,
                    // params: {pageSize:10, pageToken:''},
                    // body: null,
                }
            );
        } catch(e) {
             res = e;
        }
        return res;
    }
    
}
