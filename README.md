# IPHONE_SIMULATION_VIEW

Demo message:
<img src='./img/1583488341886.jpg'>

1.Custome Content:

        <iphone-simulation-view>
        <div><h1>Hello</h1></div>
        </iphone-simulation-view>


2.Message : 

        <iphone-simulation-view contentType="message" :messagesData="messagesData"></iphone-simulation-view>

        messagesData:
        [
                {
                user: "manager",
                text:
                    "Hello",
                img:
                    "url..."
                },
                { user: "customer", text: "Hello", img: "" }
        ]

