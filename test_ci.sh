yarn test

ret=$?

coverage=$(yarn generateCoverage)
echo $CF_VOLUME_PATH/env_vars_to_export
echo COVERAGE=$coverage%
echo COVERAGE=$coverage% >> $CF_VOLUME_PATH/env_vars_to_export

exit $ret