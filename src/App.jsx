
import './App.css'
import ReUsableForm from './components/ReUsableForm'
function App() {

  const handleSignUpSubmit = data => {
    console.log('Signup Data', data)
  }

  const handleUpdateProfile = data => {
    console.log('Update Profile', data)
  }

  return (
    <>
      
      <ReUsableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please signup Right Now</p>
        </div>
        
      </ReUsableForm>,
      <ReUsableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleUpdateProfile} >
        <div>
          <h2>Update profile</h2>
          <p>Please Update your Profile</p>
        </div>
      </ReUsableForm>,

    </>
  )
}

export default App
