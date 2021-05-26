const notes = require("./notes.js");
const yargs = require("yargs");
const chalk = require("chalk");
const { argv } = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Adding a new note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Add Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removeing a note!",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.deleteNode(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    console.log(chalk.blue("List of notes"));
    console.log(notes.loadNotes());
  },
});

debugger;

yargs.command({
  command: "read",
  describe: "Read notes!",
  title: {
    describe: "Note Title",
    demandOption: true,
    type: "string",
  },
  handler: () => {
    console.log(notes.readNote(argv.title));
  },
});

yargs.parse();
