**Ludaro-Vue-Boilerplate-with-Routers**

**Description:**
Ludaro-Vue-Boilerplate-with-Routers is a user-friendly Vue.js boilerplate specifically crafted for FiveM development, developed in partnership with @LinuxSystems. It offers an intuitive user interface and streamlined customization, featuring integrated routers for seamless navigation within applications.

**Features:**
- **Vue.js Integration:** Empower your projects with Vue.js for dynamic UI development.
- **Router Configuration:** Easily navigate between pages with integrated routers.
- **FiveM Compatibility:** Tailored for optimal integration and performance within the FiveM environment.
- **Community Collaboration:** Developed in partnership with @LinuxSystems, ensuring community-driven enhancements.
- **Customizability:** Easily extend and adapt the boilerplate to suit project requirements.

**Usage:**
1. Clone or download the repository.
2. Navigate to the project directory.
3. Install dependencies using npm.
   ```bash
   npm install
   ```
4. Build the UI for deployment.
   ```bash
   npm run build
   ```
   Ensure to build the UI before deploying in-game!

**Understanding Routers:**
- Routers facilitate seamless navigation by mapping URLs to Vue components.
- In this boilerplate, routers are configured in the `router` directory. Each route corresponds to a specific URL path and loads a corresponding Vue component.
- To add a new route, define it in `router/index.js`. Each route consists of a path and the corresponding Vue component.

**Building for Production:**
- Prepare your UI for deployment in-game by building the project.
- Run the following command to build the UI:
   ```bash
   npm run build
   ```
- Built UI ensures changes are reflected in-game.

**Important Note:**
- Features like live server won't function in the built version.
- During development, utilize `npm run dev` to access live server functionality.

**HTML Folder Structure:**
- In the `html` folder, the `src` folder contains Vue.js components and logic.
- The HTML file provided to FiveM is located in the `public` folder.

**Testing and Site Switching:**
- Utilize `/showIndex` in `client.lua` to view the UI.
- Use `SwitchSites` to switch between sites.
- To add additional sites:
   - Add files to `/html/src/components/sites`.
   - Configure routers in `/html/src/router/index.js`.
   - Update the index in `/html/src/App.vue`.

**Contributing:**
Contributions to Ludaro-Vue-Boilerplate-with-Routers are welcome! Submit pull requests for enhancements, bug fixes, or documentation improvements.

**Contact:**
For inquiries, suggestions, or collaborations, reach out via the GitHub repository or respective contact channels. Your feedback is valued!