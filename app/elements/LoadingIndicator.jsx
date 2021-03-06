var React = require('react');
var CircularProgress = require('material-ui/lib/circular-progress');

var style = require('./LoadingIndicator.less');

var LoadingIndicator = React.createClass({
    propTypes: {
        children: React.PropTypes.node

    },

    render() {
        return (
            <div className={style.this}>
                <CircularProgress mode='indeterminate'/>
                {this.props.children}
            </div>
        );
    }
});

module.exports = LoadingIndicator;
