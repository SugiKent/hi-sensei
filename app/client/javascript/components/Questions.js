import React from 'react';
import PropTypes from 'prop-types';
import Card from './card'

export default class Questions extends React.Component {

  componentWillMount() {
    // containersのonMountを実行
    this.props.onMount(this.props.categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    const {category,ranking,error} = this.props;
    return (
      <div className="row">
        <h2>{
          typeof category !== 'undefined'
            ? `${category.name}のランキング`
            : ''
        }</h2>

        {(() => {
          if (error) {
            return <p>エラーが発生</p>;
          } else if (typeof ranking === 'undefined') {
            return <p>読み込み中・・・</p>
          } else {
            return ranking.map((item,i)=>(
              <Card key={`ranking-${item.code}`} item={item} />
            ))
          }
        })()}
      </div>
    );
  }

}

Questions.propTypes = {
  categoryId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  ranking: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.bool.isRequired
};

Questions.defaultProps = {
  categoryId: '1'
}
