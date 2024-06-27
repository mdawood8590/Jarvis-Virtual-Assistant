const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    }} 
    
 function takecommand(message) {   
    if (message.includes('What is your name?')) {
        speak("My Name is jarvis and I'm an AI virtual Assistant");}
    } 
    
 function takecommand(message) {
    if (message.includes('Who is your founder?')) {
        speak("My founder is Muhammad Dawood ");
    }}
     else if (message.includes("Open Google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("Open Youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("Open Facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);}
      
        
        else if (message.includes('Open Wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
            const finalText = "This is what I found on Wikipedia regarding " + message;
            speak(finalText);
        }
    

        else if (message.includes('Open Whatsapp')) {
            window.open('Whatsapp:///');
            const finalText = "Opening Whatsapp";
            speak(finalText);
        }

        else if (message.includes("Open Chatgpt")) {
            window.open(`https://google.com/chatgpt.com/${message.replace("chatgpt", "").trim()}`, "_blank");
            speak("Opening Chatgpt...");}


            else if (message.includes("Open Daraz")) {
                window.open("https://Daraz.com" , "_blank");
                speak("Opening Daraz...");}


                else if (message.includes('Tell me the time')) {
                const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('Tell me the date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('Open Calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
