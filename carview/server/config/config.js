const config = {
    "redis_port": "6379",
    "session_name": "leading-end-demo",
    "log_type": "all",
    "port": "3001",
    "redis_ttl": "",
    "context": "/leading-end",
    "redis_password": "",
    "redis_host": "localhost",
    "session_secret": "baiyao",
    "callback": "http://localhost:3001/leading-end/callback/sso",
    "logoutUrl": "http://localhost:3001/leading-end/callback/ssologout",
    "uis_url": 'http://uis.govco.dev.wingconn.com',
    "clientId": "F14H4OyxBmNntSe",
    "back_service": "http://localhost:8081",
    "auth_center": "http://backend.govco.dev.wingconn.com/authorizationService"
}
module.exports = config;