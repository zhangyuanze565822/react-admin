import { CodeViewer } from './components/code-viewer'
import { PresetActions } from './components/preset-actions'
import { PresetSave } from './components/preset-save'
import { PresetSelector } from './components/preset-selector'
import { PresetShare } from './components/preset-share'
import { presets } from './data/presets'

export default function DispatchDelay() {
  return (
    <div>
      <PresetSelector presets={presets} />
      <br />
      <PresetSave />
      <br />

      <CodeViewer />
      <br />

      <PresetShare />
      <br />

      <PresetActions />
      <br />
    </div>
  )
}
