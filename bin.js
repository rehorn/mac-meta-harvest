#!/usr/bin/env node

var harvest = require('./harvest');

var help = false
var dashdash = false
var args = process.argv.slice(2).filter(function(arg) {
    if (dashdash)
        return !!arg
    else if (arg === '--')
        dashdash = true
    else if (arg.match(/^(-+|\/)(h(elp)?|\?)$/))
        help = true
    else
        return !!arg
});

if (help) {
    // If they didn't ask for help, then this is not a "success"
    var log = help ? console.log : console.error
    log('Usage: mac-meta-harvest <path>')
    log('')
    log('  tiny script tool to remove mac meta data (.DS_store etc) on specific path or disk')
    log('')
    log('Options:')
    log('')
    log('  -h, --help    Display this usage info')
    process.exit(help ? 0 : 1)
} else if (args.length === 0) {
    args = ['./'];
}

args.forEach(function(arg) {
    harvest(arg);
});
