import { FunctionComponent, Suspense } from 'react'

// project import
import { LoaderComponent } from './Loader'

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: FunctionComponent) => (props: any) => (
  <Suspense fallback={<LoaderComponent />}>
    <Component {...props} />
  </Suspense>
)

export default Loadable
