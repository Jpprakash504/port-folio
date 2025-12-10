import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  chatbotOpen = false;
  userInput = "";
  messages: any[] = [];

  faq: any = {
    "hi": "I am Jayaprakash , Welcome to my portfolio",
    "hello": "Hi! Ask me anything.",
    "services": "We offer web development, Angular apps, and UI design.",
    "contact": "You can contact us anytime!",
    "portfolio": "Visit our portfolio section for details.",
    "what is your experience": "3.5 Years experience in Angular Typescript"
  };

  toggleChatbot() {
    this.chatbotOpen = !this.chatbotOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    let userMsg = this.userInput.toLowerCase();

    this.messages.push({ text: this.userInput, user: true });

    if (this.faq[userMsg]) {
      this.messages.push({ text: this.faq[userMsg], user: false });
    } else {
      this.messages.push({
        text: "I don't understand. Would you like to chat on WhatsApp?",
        user: false
      });

      setTimeout(() => {
        window.open(
          "https://wa.me/919042591469?text=Hi%20I%20need%20help",
          "_blank"
        );
      }, 1500);
    }

    this.userInput = "";
  }


}
