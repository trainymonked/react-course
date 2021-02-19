import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  const [appState, setAppState] = useState({
    readOnly: false
  });

  const [cardsState, setCardsState] = useState([
    {
      _id: 1,
      caption: 'Card 1',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas nemo vitae quibusdam amet dolore libero inventore alias eaque et!',
      checked: false,
      editMode: false
    },
    {
      _id: 2,
      caption: 'Card 2',
      text:
        'Perferendis sit eligendi hic odit odio, aspernatur maxime quaerat architecto laudantium ad aliquam necessitatibus dolore vero earum blanditiis tenetur cumque sint!',
      checked: false,
      editMode: false
    },
    {
      _id: 3,
      caption: 'Card 3',
      text:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      checked: false,
      editMode: false
    },
    {
      _id: 4,
      caption: 'Card 4',
      text:
        'Duis quis mi eget nulla mollis interdum. Pellentesque viverra eleifend nulla, non laoreet est.',
      checked: false,
      editMode: false
    },
    {
      _id: 5,
      caption: 'Card 5',
      text: 'Text.',
      checked: false,
      editMode: false
    },
    {
      _id: 6,
      caption: 'Card 6',
      text:
        'Etiam sed tellus dolor. Proin rhoncus sem sed euismod venenatis. Ut aliquet magna et scelerisque scelerisque. Pellentesque eleifend nulla ut sodales mollis. Duis venenatis odio eget efficitur sagittis. Sed ullamcorper fringilla nisi, quis tincidunt velit dignissim. ',
      checked: false,
      editMode: false
    },
    {
      _id: 7,
      caption: 'Card 7',
      text:
        'Sed eros odio, vulputate vel gravida quis, ultrices nec ligula. Aliquam a lacus dictum, semper velit eu, convallis sem. ',
      checked: false,
      editMode: false
    },
    {
      _id: 8,
      caption: 'Card 8',
      text: 'Curabitur nec tincidunt magna!',
      checked: false,
      editMode: false
    },
    {
      _id: 9,
      caption: 'Card 9',
      text: 'Lorem',
      checked: false,
      editMode: false
    }
  ]);

  const updateCard = c => {
    setCardsState(cardsState.map(card => (c._id === card._id ? c : card)));
  };

  const listCards = cardsState.map(card => (
    <Card
      data={card}
      onUpdate={updateCard}
      readOnly={appState.readOnly}
      key={card._id}
    />
  ));

  const changeReadOnlyMode = () => {
    setAppState({
      readOnly: !appState.readOnly
    });
    setCardsState(cardsState.map(card => ({ ...card, editMode: false })));
  };

  const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    z-index: -1;
    opacity: 0;

    & + label {
      user-select: none;
    }
    & + label:before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 1px solid #adb5bd;
      border-radius: 0.25em;
      margin-right: 4px;
    }

    &:checked + label::before {
      border-color: #0b76ef;
      background-color: #0b76ef;
    }
  `;

  return (
    <div className="App">
      <Header />
      <div className="content">
        <StyledCheckbox
          onChange={changeReadOnlyMode}
          checked={appState.readOnly}
          id="readonly"
        />
        <label for="readonly">Read Only</label>
        <div className="listCards">{listCards}</div>
      </div>
    </div>
  );
}

export default App;
