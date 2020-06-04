import { promises as fs } from 'fs';

async function main() {
  var files = await fs.readdir('.');
  console.log(files.join('\n'));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
