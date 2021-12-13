let webHooks = require('../public/dist/webhook.json');
let tg = require('../public/dist/telegram.json');
let wa = require('../public/dist/whatsapp.json');
let ig = require('../public/dist/instagram.json');
let line = require('../public/dist/line.json');
let viber = require('../public/dist/viberpa.json');

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
                        }else{
                                return res.send(wa);
                        }
                }
        }
};
module.exports = CronController;
