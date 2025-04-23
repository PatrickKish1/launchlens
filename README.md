# Business Growth Assessment Quiz Platform

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23007ACC.svg?style=for-the-badge&logo=javascript&logoColor=white)

A responsive quiz platform that helps business owners determine whether they should outsource, build a team, or continue with a DIY approach.

![Quiz Platform Screenshot](https://i.imgur.com/lB2esYI.png)

## Features

- Interactive multi-step quiz with progress tracking
- Dynamic results calculation based on user responses
- Modern UI with Material-UI components
- Responsive design works on all devices
- Reusable quiz components
- Comprehensive test coverage

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PatrickKish1/launchlens.git
```

2. Install dependencies:

```bash
cd launchlens
npm install
```

3. Start the development server:

```bash
npm start
```

## Project Structure

```
src/
├── assets/               # Static assets (images, SVG)
├── backend/              # Quiz questions and data
│   └── questions.js
├── components/           # Reusable components
│   ├── QuizModal/
│   ├── ProgressBar/
│   └── ResultsModal/
├── pages/                # Application pages
│   └── HomePage.js
├── App.js                # Main application component
└── index.js              # Entry point
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (not recommended)

## Dependencies

- React 18+
- Material-UI 5+
- React Hook Form (optional)
- Testing Library

## Configuration

The quiz questions can be modified in `src/backend/questions.js` or by editing the JSON file if you're using that approach.

## Testing

To run all tests:

```bash
npm test
```

Test coverage includes:

- Component rendering
- User interactions
- Quiz logic
- Edge cases

## Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PatrickKish1/launchlens)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PatrickKish1/launchlens)

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/PatrickKish1/launchlens](https://github.com/PatrickKish1/launchlens)
