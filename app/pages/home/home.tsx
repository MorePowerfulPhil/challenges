import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const Home = () => (
  <div>
    <h1>Coding Challenge</h1>
    <h2>Installation</h2>

    <p>
      You&apos;ll first need to install the required dependencies, before you can get started, and run the application. Use your terminal to
      navigate into this directory, and run the following command;
    </p>

    <SyntaxHighlighter style={atomDark} language={'shell'}>
      yarn
    </SyntaxHighlighter>

    <p>You can now start the application by running;</p>

    <SyntaxHighlighter style={atomDark} language={'shell'}>
      yarn start
    </SyntaxHighlighter>

    <p>
      This application uses hot module reloading to monitor the tasks directory, triggering a reload when a file is saved. Once you start
      this application, it might be helpful to keep it running off to the side. This way you can monitor changes to your files as their
      output is rendered into the application. It&apos;s important you don&apos;t change the name of the files, unless the task directs
      otherwise, as these files are strictly linked in the demo application.
    </p>

    <h2>Getting Started</h2>

    <p>
      ll the files you&apos;ll need to work on are located in the <i>./tasks</i> directory
    </p>
  </div>
)
