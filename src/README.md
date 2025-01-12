# Grade Calculator App

This project is a simple web application that calculates the final grade based on user inputs related to exam questions. It allows users to input the number of questions, number of alternatives, correct answers, and errors, and then calculates the final grade using the formula:

\[ \text{Final Grade} = \left( \frac{A - E}{n - 1} \right) \times \frac{10}{P} \]

## Project Structure

```
grade-calculator-app
├── src
│   ├── index.html       # HTML structure of the application
│   ├── styles.css       # Styles for the application
│   ├── app.js           # JavaScript logic for calculations
├── package.json         # npm configuration file
└── README.md            # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd grade-calculator-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Open `src/index.html` in your web browser.
2. Fill in the required fields:
   - Number of Questions (n)
   - Number of Alternatives (P)
   - Correct Answers (A)
   - Errors (E)
3. Click the "Calculate" button to see the final grade.

## License

This project is licensed under the MIT License.