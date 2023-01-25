# Security Policy

## Supported Versions

As outlined by our [Repository requirements](https://github.com/open-feature/.github/blob/main/CONTRIBUTING.md#repository-requirements), OpenFeature artifacts adhere to semantic versioning and include meaningful change logs. The OpenFeature specification includes [Document status](https://github.com/open-feature/spec/tree/main/specification#document-statuses) definitions, which are used to indicate the stability level of each specification section.

## Reporting a Vulnerability

If you find something suspicious and want to report it, we'd really appreciate it!

### Ways to report

* Send a message to [ccncf-openfeature-maintainers@lists.cncf.io][mailing-list]
* If you can't send an email, either open an issue on GitHub with the description or open a pull request on GitHub with a reproducer and/or fix. We really prefer if you'd talk to us over email, though, as our repositories are public and we would like to give a heads up to our users before disclosing it publicly.

## Vulnerability Policies

OpenFeature uses Snyk and trivy vulnerability scans in order to make sure we minimize vulnerabilities in our dependencies and get notified of new vulnerabilities.

There are many situations where a vulnerability does not affect a particular dependency because of how the vulnerable package is used. In that situation the package authors may choose to stay at the current version rather than bumping the dependency, leading to a warning in the vulnerability scans but no actual vulnerability.
