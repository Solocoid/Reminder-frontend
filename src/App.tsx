import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"



function App() {
  
  return <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon size={"md"} />}></Button>
      <Button variant="secondary" text="share Brain" startIcon={<ShareIcon size={"md"} />}></Button>
      <Card />
    </div>


}

export default App
