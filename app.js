'use strict'

const request = require('request')
const urlApi = 'http://localhost:3002'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const TextCommand = Telegram.TextCommand
const chatbot = new Telegram.Telegram('547126237:AAGqCwzWDD6x2acvhxOqU7W9-oafdbYV6yI')

class EventsController extends TelegramBaseController {
  sendMessage(scope,msg) {
      /* let msg = `TESTE` */
  scope.sendMessage(msg)
    }

    allEventsAction(scope) {
      let pathApi = '/allevents'
      let msg = ''
  request.get(`${urlApi}${pathApi}`, (error, response, body) => {
        msg += JSON.parse(body).map((event) => `${event.data.toString().replace(/,/g, ' e ')} - ${event.name} - ${event.link}\n`)
        this.sendMessage(scope, msg.replace(/,/g, ''))
      })
    } 

    
  get routes() {
      return {
        'allEvents': 'allEventsAction'
      }
    }
  }
  chatbot.router
         .when(
           new TextCommand('/allevents', 'allEvents'), new EventsController()
         )