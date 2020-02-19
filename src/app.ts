function call(module: any): void {
    for (let fn in module) {
        console.log(`------- Executing ${fn} ---------`);
        module[fn]();
    }
}

function callExportFunctions(module: string): void {
    import(`./${module}`).then(m => call(m as unknown));
}

function runExamples(): void {
    const commands = [...process.argv.slice(2)];
    commands.forEach(cmd => callExportFunctions(cmd));
}

export default runExamples();
