# Technical Guidelines

## Developer Certificate Of Origin

The [Developer Certificate of Origin (DCO)](https://developercertificate.org/) is a lightweight way for contributors
to certify that they wrote or otherwise have the right to submit the code they are contributing to the project.

Contributors to the OpenFeature project sign-off that they adhere to these requirements by adding a `Signed-off-by` line to commit messages.

```console
This is my commit message

Signed-off-by: John Doe <JohnDoe@somewhere.org>
```

Git even has a `-s` command line option to append this automatically to your commit message:

```console
git commit -s -m 'This is my commit message'
```

If you have already made a commit and forgot to include the sign-off, you can amend your last commit
to add the sign-off with the following command, which can then be force pushed.

```console
git commit --amend -s
```
## Repository requirements

We require repositories in the project adhere to some security and maintenance guidelines.
They are primarily inspired by recommendations from the [Cloud Native Security Controls Catalog](https://www.cncf.io/blog/2022/06/07/introduction-to-the-cloud-native-security-controls-catalog/).
Adherence to these guidelines is required for 1.0 artifact releases, to the satisfaction of the [Technical Steering Committee](./governance-charter.md#technical-steering-committee-tsc).

| Requirement                                    | Recommended solution(s)                                                                                                                   | Notes                                                       |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| automated publishing                           | github actions (with permissions applying principle of least privilege), language-specific tools (Maven, nuget, NPM, etc)                 | required                                                    |
| container, base image scanning                 | [snyk][snyk], [trivy][trivy]                                                                                                              | required                                                    |
| code ownership                                 | branch protection rules\* and CODEOWNERS files                                                                                            | required                                                    |
| dependency analysis                            | [snyk][snyk]                                                                                                                              | required                                                    |
| dependency auto-updates                        | [Renovate][renovate]\*\*, [Dependabot][dependabot]                                                                                        | required                                                    |
| semantic versioning, changelogs                | [Semantic Versioning][semantic-versioning], [Conventional Commits][conventional-commits], [Release Please][release-please]\*\*\*          | required                                                    |
| unit, integration testing                      | github actions (with permissions applying principle of least privilege), language-specific tools (JUnit, Jest, etc), [Cucumber][cucumber] | required, with coverage metrics up to maintainer discretion |
| signing (binaries, packages, container images) | language-specific tools, [cosign][cosign]                                                                                                 | recommended, where supported                                |
| fuzzing                                        | [ClusterFuzzLite][clusterfuzzlite], [OSS-Fuzz][oss-fuzz]                                                                                  | recommended                                                 |
| helpful readme file                            | See [example README.md](https://github.com/open-feature/.github/blob/main/templates/READMEs/README.md)                                                                                    | recommended                                                 |
| provenance                                     | [SLSA](https://slsa.dev/spec/v1.0/provenance#provenance)                                                                                  | recommended                                                 |
| SBOM generation                                | [CycloneDX][cyclonedx], [SPDX][spdx], [syft][syft]                                                                                        | recommended                                                 |
| static analysis                                | [SonarCloud][sonarcloud], language-specific tools (SpotBugs, eslint)                                                                      | recommended                                                 |

\* Branch protection rules should protect the primary branch (usually `main`) by requiring code review from the appropriate parties (other than the author), usually expressed in a CODEOWNERS file.

\*\* We recommend Renovate over Dependabot because of its group and auto-merge features.
Additionally, we have an org-wide base config for Renovate.

\*\*\* Release Please isn't strictly necessary, but combined with [Conventional Commits][conventional-commits], it provides a simple yet robust means of generating useful, accurate changelogs and releasing semantically versioned artifacts.

### "Contrib" repositories

Along with SDK repositories, we also maintain "contrib" repositories for most of our supported languages.
These repositories are "monorepos" that house community contributions which are extensions to, or integrations with, the base SDKs.
Examples include providers, hooks and framework-specific SDKs.
In addition to the normal [repository requirements](#repository-requirements) (many of which are already implemented for all packages in each monorepo), components must each have _at least_ one user specified the `component_owners.yml` (see https://github.com/dyladan/component-owners for more). It's the responsibility of the `component_owner(s)` to:

- review and resolve issues pertaining to their component
- review and resolve pull requests pertaining to their component, including automated pull requests from dependabot, etc
- review releases PRs for new versions of their component
- alert the [Governance Board or Technical Committee](./community-members.md#technical-committee) if they're no longer interested or able to fulfill the preceding requirements

Consistent and prolonged failure to satisfy the above requirements may result in archival and deprecation of the component in question.

## Semantic Versioning and 1.0 Releases

We require release artifacts to adhere to [semantic versioning](https://semver.org/) except in specific cases approved by the [Technical Steering Committee](./community-members.md#technical-committee).
1.0 releases must satisfy the [repository requirements](#repository-requirements) above.
If the artifact is an SDK implementing the OpenFeature specification, it must also conform to a version of the OpenFeature specification not less than 2 minor versions behind the latest (ex: if the latest OpenFeature specification is `0.8.1`, then an implementation conforming to `0.6.0` is a candidate for `1.0` release, while an implementation conforming only to `0.5.0` is not).
This policy may be subject to change with the release of the OpenFeature specification version `1.0.0`.

> [!IMPORTANT]  
> While the OpenFeature specification version is < `1.0`, it's possible breaking changes will be introduced.
> This may necessitate that SDKs which have released `1.0` versions, release `2.0` versions in order to adhere to breaking specification changes.

> [!IMPORTANT]  
> Note that features in the specification marked as `experimental` may change at any time, and implementations may choose to make breaking changes to such features disregarding semantic versioning conventions.
> See [specification document statuses](https://openfeature.dev/specification/#document-statuses).

### Breaking Changes to Major Versions

Efforts should be made to avoid breaking changes in `1.0+` artifacts.
If such changes are necessary, please consider the following:

* How important is the breaking change? Is there a non-breaking alternative?
* Have the changes in question been marked as deprecated for some time?
  * If possible, deprecate the functionality and give users some time to prepare for the changes in advance.
* How difficult would it be to backport emergency fixes to the previous version (enterprises on the old platform will almost certainly not be able to upgrade immediately, so backports for security fixes or severe bugs must be supported). 
  * It's highly recommended to create a `v(-1)` branch before introducing breaking changes, to support the release of such fixes.
    * For example, if you are releasing a `2.0.0`, maintain a `v1` branch.
    * [Release Please][release-please] can make maintenance and release of artifacts from such a branch easy; simply have the release-please action run on the branch, and target that branch for its PRs.

Please consult with a member of the [TC](./community-members.md#technical-committee) before making breaking changes to a `1.0+` component.

## Platform Support

OpenFeature maintains SDKs and integrations targeting various platforms, runtimes, and frameworks.
For the purposes of this document, a "platform" constitutes an assumed underlying runtime dependency.
This includes, but is not limited to: languages, operating systems, dependency managers, virtual machines and software libraries.
This section describes our approach to supporting, and deprecating support for these.

### Platform Support Recommendations

* Efforts should be made to support the usage of OpenFeature libraries on all officially supported (non-EOL) platforms for the library in question (i.e.: a library for Node.js should support all officially supported versions of Node.js).
* Support should be documented explicitly in the relevant README, and in any implementation-specific tooling (ie: `engine` value in `package.json` or `maven.compiler.target` in `pom.xml`).

### Removing Support for Platforms

Removing support for a platform should not be done arbitrarily, but when maintenance becomes burdensome, consider the following when dropping support:

* Is the platform officially supported?
  * How recently was support dropped?
* Is the implicated OpenFeature component pre-release or `1.0+`? 
* How popular is the implicated OpenFeature library at the moment?
  * More usage means that the likelihood of usage by the platform to be deprecated is higher.
* Should this be considered a breaking change?
  * **This is highly dependent on the platform in question, as well as how change averse its user base is** (ie: Go is a very fast moving platform relative to Java).
  * How difficult will the required platform change be for users to consume? Does the new platform version contain many breaking changes?
  * See [breaking changes to major versions](#breaking-changes-to-major-versions)

Please consult with a member of the [TC](./community-members.md#technical-committee) before dropping support for a platform, runtime or framework version.

[sonarcloud]: https://www.sonarsource.com/products/sonarcloud/
[snyk]: https://snyk.io/
[trivy]: https://github.com/aquasecurity/trivy
[cosign]: https://github.com/sigstore/cosign-installer
[cyclonedx]: https://cyclonedx.org/tool-center/
[clusterfuzzlite]: https://google.github.io/clusterfuzzlite/
[oss-fuzz]: https://github.com/google/oss-fuzz
[cucumber]: https://cucumber.io/tools/cucumber-open/
[renovate]: https://github.com/apps/renovate
[syft]: https://github.com/anchore/syft
[spdx]: https://spdx.dev/resources/tools/
[dependabot]: https://github.com/dependabot
[conventional-commits]: https://www.conventionalcommits.org/
[semantic-versioning]: https://semver.org/
[release-please]: https://github.com/googleapis/release-please
