# Cross-site scripting (XSS) and cross-site request forgery (CSRF)

## XSS

cross-site scripting allows an attacker to execute scripts in a victim's browser.

cross-site scripting occurs whenever an application includes untrusted data in a new web page without proper validation or escaping, or updating a web page with user supplied data using js.

for example,

1. inject a script into a comment
1. another user opens the webpage with the comment
1. the script gets run
1. sends the user's cookie to somewhere

## CSRF

CSRF allows an attacker to induce users to perform actions that they do not intend to perform. It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.

to prevent CSRF

1. in header setting Content-Security-Policy with trusted domain could. for example,
   ```
   Content-Security-Policy: default-src 'self' *.trusted.com
   ```
1. set the property httpOnly and secure to true for cookies
   - httpOnly: prevent from the cookie being accessed by client side scripting
   - secure: ensures cookies will be sent over https

## The bottom line

- Sanitize input
- no eval()
- no document.write()
- Content-Security-Policy
- httpOnly and secure cookies
