# IMNS Lab Homepage

## Description
The landing page created for the Institute for New Media Studies at Fort Hays State University. It is used as the Google Chrome start page and links to resources used in the lab. 

## Getting Started

### Viewing the Website
Download the repository, open in VS Code, and view using Live Server.

### Add a link
Links are stored in data.json and dynamically rendered through links.js.
1. Open data.json
2. Add a new JSON object inside the either the lab, tools, or student category.
3. Define the key pair values. Each link gets a title, url, and image link (see example below).
````
{
    "title": "Example",
    "url": "https://example.com",
    "image": "../images/icons/example.png"
}
````

## Authors

Levi Eck

