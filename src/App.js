import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import UserItem from './components/UserItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Patricia Taylor',
    nickname: 'jackson',
    age: '21',
    gender: 'Female',
    mobileNo: 945328888,
    email: 'jack@123455',
  },
  {
    id: uuidv4(),
    name: 'Susan Clark',
    nickname: 'Rodrigious',
    age: '26',
    gender: 'male',
    mobileNo: 956788888,
    email: 'rodgi@123455',
  },
  {
    id: uuidv4(),
    name: 'jammionis',
    nickname: 'jack',
    age: '25',
    gender: 'Female',
    mobileNo: 94569988888,
    email: 'jamm@123455',
  },
  {
    id: uuidv4(),
    name: 'garhuit',
    nickname: 'ragui',
    age: '25',
    gender: 'male',
    mobileNo: 9954688888,
    email: 'gar@123455',
  },
  {
    id: uuidv4(),
    name: 'atlanci',
    nickname: 'atlu',
    age: '20',
    gender: 'male',
    mobileNo: 9999988888,
    email: 'alta@135455',
  },
  {
    id: uuidv4(),
    name: 'richard',
    nickname: 'ra',
    age: '28',
    gender: 'male',
    mobileNo: 95499654342,
    email: 'ricm@123455',
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    nickname: '',
    age: '',
    gender: '',
    mobileNo: '',
    email: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, nickname, age, gender, email, mobileNo} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      nickname,
      age,
      gender,
      mobileNo,
      email,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      nickname: '',
      age: '',
      gender: '',
      mobileNo: '',
      email: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeNickname = event => {
    this.setState({nickname: event.target.value})
  }

  onChangeAge = event => {
    this.setState({age: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  render() {
    const {
      name,
      nickname,
      age,
      gender,
      email,
      mobileNo,
      contactsList,
    } = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Users List :</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              value={nickname}
              onChange={this.onChangeNickname}
              className="input"
              placeholder="Nickname"
            />
            <input
              value={age}
              onChange={this.onChangeAge}
              className="input"
              placeholder="age"
            />
            <input
              value={gender}
              onChange={this.onChangeGender}
              className="input"
              placeholder="Gender"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Phone"
            />
            <input
              value={email}
              onChange={this.onChangeEmail}
              className="input"
              placeholder="Email"
            />
            <button type="submit" className="button">
              Add User
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Nickname</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Age</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">gender</p>
              <hr className="separator" />
              <p className="table-header-cell name-column">Phone</p>
              <hr className="separator" />
              <p className="table-header-cell">Email</p>
            </li>
            {contactsList.map(eachContact => (
              <UserItem key={eachContact.id} contactDetails={eachContact} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
