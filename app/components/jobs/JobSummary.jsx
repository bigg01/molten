var React = require('react');
var Paper = require('material-ui/lib/paper');
var Link = require('react-router').Link;
var classnames = require('classnames');
var Constants = require('Constants');
var CollapsedStructuredElement = require('elements/CollapsedStructuredElement');

var rowStyles = require('components/RowLayout.less');
var styles = require('./JobSummary.less');

var JobSummary = React.createClass({
    propTypes: {
        job: React.PropTypes.object.isRequired,
        filtered: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            filtered: false
        };
    },

    renderHeader() {
        return (
            <div className={classnames(styles.header)}>
                <div>
                    <span className={styles.joblabel}>Job ID:</span>
                    <Link to={`${Constants.URL.JOB}/${this.props.job.jid}`}>{this.props.job.jid}</Link>
                </div>
            </div>
        );
    },

    renderBody() {
        return (
            <div>
                <CollapsedStructuredElement
                    downloadEnabled
                    collapseOnly={['return']}
                    element={this.props.job}/>
            </div>
            );
    },

    render() {
        return (
            <Paper className={classnames(rowStyles.this, styles.this, { filtered: this.props.filtered })} zDepth={2}>
                {this.renderHeader()}
                {this.renderBody()}
            </Paper>
        );
    }
});

module.exports = JobSummary;
