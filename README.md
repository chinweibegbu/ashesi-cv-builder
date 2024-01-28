# Ashesi CV Builder
An intuitive CV builder for Ashesi University students

## Project Overview
### Idea
Ashesi-specific CV builder to stop combatting the error-prone MS Word template file

### Industry Comparison
#### Existing Services
1. [Flow CV](https://flowcv.com/)
2. [Zety](https://zety.com/)
3. [Resume.io](https://resume.io/)
4. [cvmaker](https://cvmkr.com/)

#### Discoveries and Observations
* Often encourages the inclusion of a professional summary, which Ashesi does not give space for in its template
* Live CV preview is a common feature
* Most only allow entry of one phone number
* Most allow the addition of links such as GitHub, LinkedIn, etc. 

## User Interface
Figma file: https://www.figma.com/file/pk2nLD0cpkspC1QRtvEoIO/CV-Builder?type=design&node-id=0%3A1&mode=design&t=fN2sGtXDXIk357ZB-1

Colour Scheme: 
| Category          | Hex code       |
|-------------------|----------------|
| Base colour       | `#8A3D40`      |
| Font colour       | `#FFFFFF`      |
| Background colour | `#EAECEF`      |

Font Family: `Inter` <br>
| Category          | Font Size      |
|-------------------|----------------|
| Menu Bar Title    | 28px           |
| Landing Page Text | 50px + 28px    |
| Section Title     | 24px           |
| Input Field       | 16px           |
| Text              | 16px           |
| Sub-text          | 13px           |
| Button            | 24px           |

## Functional Requirements

#### Landing Page
- [x] Sign in
- [x] Sign up

#### Homepage
- [x] View all created CVs
- [x] Create new CV
- [x] Edit existing CV

#### Create New CV Page
- [x] Live CV preview 
- [x] Add details to profile:
  - [x] Full name
  - [x] Current city and country
  - [x] Phone number
  - [x] Email address
  - [x] Nationality
  - [x] LinkedIn
  - [ ] Any other websites (e.g. GitHub, WordPress, personal website, etc.)
- [ ] Add details to sections:
  - [x] Education
    - [x] Name of institution
    - [x] Degree
    - [x] Name of degree
    - [x] Location (City, Country)
    - [x] Start and end dates
    - [x] Cumulative GPA*
  - [x] Achievements/Awards
    - [x] Achievement/Award name
    - [x] Associated institution
    - [x] Date acquired (one-time)/Start and end dates (continuous)
  - [x] Work Experience
    - [x] Name of institution
    - [x] Location of company
    - [x] Position
    - [x] Start and end dates
    - [x] Description
  - [x] Skills
    - [x] Soft skills
    - [x] Hard skills
  - [ ] References
  - [ ] Projects/Research*
  - [ ] Co-curricular*
  - [ ] Interests*
  - [ ] Publications*
- [ ] Definitions of terms
- [x] Download CV
- [ ] Get link to CV
- [ ] Email CV to user
      
\* - optional fields

### Non-Functional Requirements
1. Performance and scalability
   * Supports up to 1500 users
   * Supports up to 500 users simultaneously
   * Returns results in 0.1 to 1s
2. Portability and compatibility
   * Compatible with all operating systems
   * Compatible with all browsers
   * The date format must be as follows: month.date.year.
3. Reliability, maintainability, availability
   * Experience critical failures one time at most per month
   * Take 12 hours maximum to solve a problem
   * Available 90% of the time
4. Security:
   * Uses HTTPS
   * Invulnerable to SQL injection
5. Usability
   * Highly intuitive
   * Smooth learning curve
   * Easily-visible errors and error-handling flows
   * Easily-visible location markers
   * Easily-visible loading indictors
6. Localization
   * Uses UK British English
   * Uses the DD/MM/YYYY date format
   * Uses the Ashesi University colours

## Technical Stack
Frontend: [React.js](https://react.dev/) + [Bootstrap](https://getbootstrap.com/) <br>
Backend: [Node.js](https://nodejs.org/en) + [Express.js](https://expressjs.com/) <br>
Database: [PostgreSQL](https://www.postgresql.org/) <br>
Code IDE: [VSCode](https://code.visualstudio.com/) <br>
Deployment: [Render](https://render.com/) <br>

## Acknowledegments
### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts
In the project directory, you can run:
* `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
* `npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
* `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
* `npm run eject`: If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. 
  <br> **NOTE: This is a one-way operation. Once you `eject`, you can't go back!**
