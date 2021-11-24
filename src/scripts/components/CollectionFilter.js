export default class CollectionFilter {
  constructor() {
    this.DOM = {}

    this.DOM.collectionGrid = '.js-grid-trigger'

    this.collectionGrid = document.querySelector(this.DOM.collectionGrid)

    this.init()
  }

  init() {
    if (this.collectionGrid == null) return
    this.collectionDeploy()
  }

  collectionDeploy() {
    let collectionList = document.querySelector('.js-list-trigger')
    let collectionWrapper = document.querySelector('.js-grid-list-wrapper')

    this.collectionGrid.addEventListener('click', (e) => {
      e.preventDefault()
      if (!collectionWrapper.classList.contains('collection-grid')) {
        collectionWrapper.classList.add('collection-grid')
      }
      return
    })

    collectionList.addEventListener('click', (e) => {
      e.preventDefault()
      if (collectionWrapper.classList.contains('collection-grid')) {
        collectionWrapper.classList.remove('collection-grid')
      }
      return
    })
  }
}

new CollectionFilter()
