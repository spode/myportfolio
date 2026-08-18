import { writeFileSync } from "fs"
import path from 'path';

// Path to the build folder
const buildDir = "docs"

// Create the .nojekyll file
writeFileSync(path.join(buildDir, '.nojekyll'), '', 'utf8');

// Create the CNAME file
writeFileSync(path.join(buildDir, 'CNAME'), 'chrisb.se', 'utf8');
