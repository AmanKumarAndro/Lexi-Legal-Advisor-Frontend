# Lexi Legal Assistant Interface

A modern, responsive frontend interface for a legal AI assistant that provides answers to legal questions with verifiable citations from legal documents.

## 🎯 Project Overview

This project simulates the core functionality of Lexi - a legal research assistant that:
- Accepts legal questions from users
- Provides AI-generated legal answers
- Shows verifiable citations from legal documents
- Links directly to source PDFs at relevant paragraphs

## 🚀 Features

### Core Functionality
- **Query Input**: Clean textarea interface for legal questions
- **AI Response Display**: Professional formatting for legal answers
- **Citation System**: Clickable citations that link to source documents
- **PDF Integration**: Opens legal documents in new tabs
- **Loading States**: Smooth UX with loading animations


## 🛠️ Tech Stack

- **Frontend**: React.js with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React useState
- **API**: Simulated (no backend required)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmanKumarAndro/Lexi-Legal-Advisor-Frontend.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages**
   ```bash
   npm install lucide-react
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

## 🎮 How to Use


### Sample Query
```
In a motor accident claim where the deceased was self-employed and aged 54–55 years at the time of death, is the claimant entitled to an addition towards future prospects in computing compensation under Section 166 of the Motor Vehicles Act, 1988? If so, how much?
```


### Citation Format
Each citation includes:
- **Text**: Direct quote from legal document
- **Source**: PDF filename
- **Paragraph**: Specific paragraph reference
- **Link**: Direct URL to the PDF document

### API Simulation
The app simulates API calls with:
- 2-second delay
- Loading animations
- Mock response data


## 🐛 Known Issues

1. **PDF Highlighting**: Currently opens PDF but doesn't highlight specific paragraphs
2. **API Simulation**: All queries return the same mock response

## 📝 API Structure

### Request Format
```javascript
{
  query: "Legal question text"
}
```

### Response Format
```javascript
{
  answer: "AI-generated legal answer",
  citations: [
    {
      text: "Quoted text from document",
      source: "document_name.pdf",
      paragraph: "Para 7",
      link: "https://example.com/document.pdf"
    }
  ]
}
```

## 🙏 Acknowledgments

- **Lexi Team** for the assignment and requirements
- **React Community** for excellent documentation
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide React** for beautiful icons

---

**Built with ❤️**