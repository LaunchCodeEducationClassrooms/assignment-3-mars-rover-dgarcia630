const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover (98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
});

it("response returned by receiveMessage contains name of message", function() {
  let testMess = new Message("TEST",[new Command("STATUS_CHECK")], [new Command("STATUS_CHECK")]);
  let rover = new Rover(98382);
  expect(rover.receiveMessage(test).results.length).toEqual(test.commands.length)
});

it ("response returned by recieveMessage includes two results if two commands are sent in the message", function() {
  let rover = new rover (98382);
  let testMess = [new Command ("MOVE", 222), new Command ("STATUS_CHECK")];
  let test = new Message ("TEST", commands);

  expect(rover.receiveMessage(test).results.length).toEqual(2);
});

it("responds correctly to status check command", function() {
  let rover = new Rover (98382);
  let command = [new Command("MOVE", 8675309), new Command("STATUS_CHECK")];
  let message = new Message("TEST", commands);
  let receivedMessage = rover.receivedMessage(message);
  let status = receivedMessage.results[1]["roverStatus"];
    expect(status.position).toEqual(8675309)    
    expect(status.mode).toEqual("NORMAL");
    expect(status.generatorWatts).toEqual(110);
});
it("responds correctly to mode command", function() {
  let rover = new Rover (98382);
  let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
        let message = new Message("TEST", commands);
        let receivedMessage = rover.receiveMessage(message);
        let status = receivedMessage.results[0]["completed"];
        let mode = rover.mode;
        expect(status).toBeTrue();
        expect(mode).toEqual("LOW_POWER");
    
it("responds with false completed value when trying to move in LOW_POWER mode", function() {
        let rover = new Rover(983282);
        rover.mode = "LOW_POWER";
        let commands = [new Command("MOVE", 120), new Command("STATUS_CHECK")];
        let message = new Message("TEST", commands);
        let receivedMessage = rover.receiveMessage(message);
        let status = receivedMessage.results[0]["completed"];

        expect(status).toBeFalse();
    
    });

    it("responds with position for MOVE command", function() {
        let rover = new Rover(90210);
        let commands = [new Command("MOVE", 8675309), new Command("STATUS_CHECK")];
        let message = new Message("Thanks for coming to play", commands);
        rover.receiveMessage(message);

        expect(rover.position).toEqual(8675309);
    });

});