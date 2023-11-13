import {SignUp} from '@clerk/nextjs'

export default function page(){
    return <SignUp afterSignUpUrl='/new-user' redirectUrl="new-user"/>
}