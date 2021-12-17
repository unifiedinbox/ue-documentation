let webHooks = require('../public/webhook.json');
let tg = require('../public/telegram.json');
let wa = require('../public/whatsapp.json');
let ig = require('../public/instagram.json');
let line = require('../public/line.json');
let viber = require('../public/viberpa.json');
let wabaSandbox = require('../public/whatsappSandbox.json');

let CronController = {
        getJsonData:function (req, res, next) {
                if(req.query.connector){
                        if(req.query.connector == 'webhook'){
                                console.info('Get webhook URL',req.query.webhook);
                                let webHook = new URL(req.query.webhook)
                                webHooks.host = webHook.hostname;
                                webHooks.basePath = webHook.pathname;
                                return res.send(webHooks);
                        }else if(req.query.connector == 'tg'){
                                return res.send(tg);
                        }else if(req.query.connector == 'ig'){
                                return res.send(ig);
                        }else if(req.query.connector == 'line'){
                                return res.send(line);
                        }else if(req.query.connector == 'vp'){
                                return res.send(viber);
                        }else if(req.query.connector == 'wabasand'){
                                return res.send(wabaSandbox);
                        }else{
                                return res.send(wa);
                        }
                }
        }
};
module.exports = CronController;
