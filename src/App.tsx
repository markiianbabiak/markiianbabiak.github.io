
function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Deploy React to GitHub Pages</h1>
            <p className="text-gray-600 mb-8">Step-by-step guide to host your React app for free</p>
            <div className="bg-white border border-gray-200 rounded p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Node.js</h3>
                    <p className="text-sm text-gray-600">I've already had Node installed on my macbook, but I know you have to have it in order to create and run a React application. You can install it by following instructions from https://nodejs.org/en/download. If you already have it, you can check your intallation by running:</p>
                    <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                        <code>{`node -v
npm -v`}
                        </code>
                    </pre>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Developement Steps</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-900">1. Create a new React app with Vite</h3>
                        <p className="text-sm text-gray-600 mt-1">I ran the following command and then answered the prompts:</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`npm create vite@latest
 npx
 create-vite

│
◇  Project name:
│  lab-10
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/markiianbabiak/CPS530/lab10/lab-10...
│
◇  Installing dependencies with npm...

added 176 packages, and audited 177 packages in 4s

45 packages are looking for funding
  run npm fund for details

found 0 vulnerabilities
│
◇  Starting dev server...

 lab-10@0.0.0 dev
 vite


  VITE v7.2.6  ready in 278 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help


                            `}</code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">2. Install Tailwind CSS</h3>
                        <p className="text-sm text-gray-600 mt-1">Next, I ran these commands that would make writing CSS way easier for me</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">3. Configure Tailwind CSS</h3>
                        <p className="text-sm text-gray-600 mt-1">Now I made changes to the tailwind.config.js. and added this to content:</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">4. Make my app use Tailwind CSS</h3>
                        <p className="text-sm text-gray-600 mt-1">Now I replace the conents of index.css to the following:</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">5. Write the webpage code in App.tsx</h3>
                        <p className="text-sm text-gray-600 mt-1">I replace the default content of App.tsx with my own code to create the webpage.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white border border-gray-200 rounded p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Deployement Steps</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-900">1. Create a repository on github</h3>
                        <p className="text-sm text-gray-600 mt-1">The repo has to be named username.github.io and has to be public</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">2. Add your work to the github repo</h3>
                        <p className="text-sm text-gray-600 mt-1">I ran the following commands to do that:</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/markiianbabiak/markiianbabiak.github.io.git
git push -u origin main`}   </code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">3. Build the website</h3>
                        <p className="text-sm text-gray-600 mt-1">I ran the following command to build the website in a dist folder:</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`npm run build`}</code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">4. Put the dist folder onto a different branch</h3>
                        <p className="text-sm text-gray-600 mt-1">I ran the following command to do that:</p>
                        <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 overflow-x-auto">
                            <code>{`git checkout --orphan gh-pages
git reset --hard
cp -r dist/* .
git add .
git commit -m "Deploy"
git push origin gh-pages
git checkout main`}         </code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">5. Change the source branch for the GitHub Pages</h3>
                        <p className="text-sm text-gray-600 mt-1">Go into the repo setting, then clock on github pages then change the source branch to gh-pages</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900">6. Go ahead and check the results</h3>
                        <a className="text-sm text-gray-600 mt-1" href="https://markiianbabiak.github.io">Here</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
