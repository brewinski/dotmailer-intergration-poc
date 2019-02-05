import resource from 'resource-router-middleware';
import DotmailerAPI from '../models/dotmailer';
import Promise from 'promise';

export default ({ config }) => resource({   
    index({ params }, res) {
        const json = {};
        json.action = 'intergration with dotmailer';
        json.status = '200';
        try {
            DotmailerAPI.requestDotmailerEndpoint('GetContacts', null, null, null)
            .then(
                async result => {
                    const users = await Promise.all(
                        result.map(async contact => await DotmailerAPI.requestDotmailerEndpoint('GetContactById', contact.id))
                    );
                    res.json(users)
                },
                reason => res.json(reason)
            ).catch(
                ex => console.log(ex)
            );
        } catch(ex) {
            console.log(ex);
        }
    }
});