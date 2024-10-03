const ts = require('typescript');
const fs = require('fs');
const path = require('path');

// Define the paths
const isProduction = process.env.NODE_ENV === 'production';
const tsFilePath = path.join(__dirname, isProduction ? 'src/environments/environment.prod.ts' :'src/environments/environment.ts');
const jsFilePath = path.join(__dirname, 'src/environments/environment.js');
// Read and compile the TypeScript file
const tsContent = fs.readFileSync(tsFilePath, 'utf8');
const result = ts.transpileModule(tsContent, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ESNext }
});
// Write the compiled JavaScript to a file
fs.writeFileSync(jsFilePath, result.outputText, 'utf8');
// Require the compiled JavaScript file
const compiledModule = require(jsFilePath);
// Clean up the temporary file
fs.unlinkSync(jsFilePath);

module.exports = {
    output: {
        publicPath: `${compiledModule.environment.microUrl}/`, // Set this to the correct chunk location
    }
};
