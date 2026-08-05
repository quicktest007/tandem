/** Opens the in-site demo notice modal. */
export function showDemoNotice(event) {
  event?.preventDefault?.()
  window.dispatchEvent(new CustomEvent('tandem:demo-open'))
}
