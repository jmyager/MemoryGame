import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import Nav from "./components/Nav";
import "./App.css";

// Help from Will

// export class myComponent extends Component {
//   state = {
//     memory: [1, 4, 3]   
//   }


//   updateMemory(id) {
//       const newMemory = this.state.memory.slice(0);
//       newMemory.push(id);
//       this.setState({
//           memory: newMemory,
//       })
//   }

//   inMemory(id) {
//       return !!this.state.memory.find(m => m === id)
//   }
// }


class App extends React.Component {
  state = {
    friends,
    memory: [],
    score: 0,
    highScore: 0,
    message: "Click on a tile to begin"
  };

  selectCard = id => {
    this.checkMemory(id);
    this.shuffleCards(friends);
    console.log("friends: " + friends);
  };


  checkMemory = id => {
    // If the id exists in the memory array
    if (!!this.state.memory.find(m => m === id)) {

      // Display message
      const newMessage = "You guessed incorrectly.";
      this.setState({ message: newMessage });

      // The player loses and the game is reset
      const newMemory = [];
      this.setState({ memory: newMemory });
      alert("Game over. You guessed incorrectly. Click on another tile to try again.");

      // Before reseting the score check for highscore
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }

      // Now reset score
      const newScore = 0;
      this.setState({ score: newScore });
    }
    // Else the id does not exist in the memory array
    else {

      // Display message
      const newMessage = "You guessed correctly!";
      this.setState({ message: newMessage });

      // Push the id to the array and add 1 to the score
      const newMemory = this.state.memory.slice(0);
      newMemory.push(id);
      this.setState({ memory: newMemory });
      this.setState({ score: this.state.score + 1 });
    }
  };

  shuffleCards = (array) => {
    // Shuffle function
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      console.log("array: " + array);
      // Change old friends array to new array
      this.setState({ friends: array })
    
  }

  render() {
    return (
      <div>
        <Nav
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <div className="background">
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              selectCard={this.selectCard}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
