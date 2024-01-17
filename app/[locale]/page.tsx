import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/app/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/app/components/SignUpUserSteps'
import Header from '@/app/components/Header'
import { cookies } from 'next/headers'
import ControlClientComponent from '@/app/components/ControlClientComponent'
import NavigationBar from '@/app/components/NavigationBar'

const navigation = [
  { title: "Francais", path: "javascript:void(0)" },
  { title: "English", path: "javascript:void(0)" },
  { title: "Italien", path: "javascript:void(0)" },
];

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <>
      <div className="w-full flex flex-col items-center">
        <NavigationBar navigation={navigation} user={user} />

        <ControlClientComponent />
      </div>
    </>
  )
}
