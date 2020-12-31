import pickRandomColor from '../tools/pickRandomColor'

export const ListItemStyles = {
  listItemStyles: {
    backgroundColor: pickRandomColor(),
    borderRadius: 8,
    flexDirection: 'row',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '3%',
    marginRight: '3%',
  },
  listItemContentStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  textContainerStyles: {
    flexDirection: 'column',
  },
  innerListItemStyles: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: '95%',
    width: '88%',
    marginLeft: '10%',
  },
  logoStyles: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  titleStyles: {
    width: '85%',
  },
}
