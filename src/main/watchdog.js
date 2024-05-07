const { exec } = require('child_process');
const os = require('os');
const fs = require('fs');
const path = require('path');

function checkApp() {
  const platform = os.platform();
  let command;

  if (platform === 'win32') {
    command = `tasklist /FI "IMAGENAME eq electron-gaming-system.exe" 2>&1 | find /I /N "electron-gaming-system.exe"`;
  } else if (platform === 'darwin') {
    command = `pgrep -x "electron-gaming-system"`;
  } else {
    command = `pgrep -x "electron-gaming-system"`;
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }

    if (stdout.trim() === '') {
      console.log('Electron app not running, restarting...');
      const appPath = path.resolve(__dirname, '..', 'path', 'to', 'your', 'electron', 'app');
      const appCommand = `cd "${appPath}" && npm start`;

      exec(appCommand, () => {});
    }
  });
}

setInterval(checkApp, 10000); // Check every 10 seconds
