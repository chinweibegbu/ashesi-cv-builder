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
- [ ] Sign in

#### Homepage
- [ ] View all created CVs
- [ ] Create new CV
- [ ] Edit existing CV
- [ ] Create/Edit new CV

#### Create New CV Page
- [ ] Live CV preview 
- [ ] Add details to profile:
  - [ ] Full name
  - [ ] Current city and country
  - [ ] Phone number
  - [ ] Email address
  - [ ] Nationality
  - [ ] LinkedIn
  - [ ] Any other websites (e.g. GitHub, WordPress, personal website, etc.)
- [ ] Add details to sections:
  - [ ] Education
    - [ ] Name of institution
    - [ ] Degree
    - [ ] Name of degree
    - [ ] Location (City, Country)
    - [ ] Start and end dates
    - [ ] Cumulative GPA*
  - [ ] Achievements/Awards
    - [ ] Achievement/Award name
    - [ ] Associated institution
    - [ ] Date acquired (one-time)/Start and end dates (continuous)
  - [ ] Work Experience
    - [ ] Name of institution
    - [ ] Location of company
    - [ ] Position
    - [ ] Start and end dates
    - [ ] Description
  - [ ] Skills
    - [ ] Soft skills
    - [ ] Technical skills
  - [ ] References
  - [ ] Projects/Research*
  - [ ] Co-curricular*
  - [ ] Interests*
  - [ ] Publications*
- [ ] Definitions of terms
- [ ] Download CV
- [ ] Get link to CV
- [ ] Email CV to user
* optional fields

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
   * Easily visible errors and error-handling flows
   * Easily-visible location markers
   * Easily-visible loading indictors
6. Localization
   * Uses UK British English
   * Uses the DD/MM/YYYY date format
   * Uses the Ashesi University colours

## Technical Stack
Frontend: [React.js](https://react.dev/), [Bootstrap](https://getbootstrap.com/) <br>
Backend: [Node.js](https://nodejs.org/en) + [Express.js](https://expressjs.com/) <br>
Database: [PostgreSQL](https://www.postgresql.org/) <br>
Code IDE: [VSCode](https://code.visualstudio.com/) <br>
Deployment: [Vercel](https://vercel.com/) <br>

**NOTE**: VEIT Now is now Vercel.
