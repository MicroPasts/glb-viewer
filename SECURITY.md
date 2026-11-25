# Security Policy

## Supported Versions

Security fixes are applied to the latest release on the `main` branch of `@micropasts/glb-model-viewer`.

## Reporting a Vulnerability

Please do **not** report security vulnerabilities through public GitHub issues.

Instead, report potential issues privately via GitHub's private vulnerability reporting on the repository (`https://github.com/MicroPasts/glb-viewer/security/advisories/new`) or by contacting the maintainer directly through the MicroPasts / repository contact channels.

When reporting a vulnerability, please include:
- A clear description of the issue and affected component or helper
- Steps to reproduce or a minimal proof of concept
- Potential security impact (such as cross-site scripting, unsafe link rendering, or denial-of-service / excessive resource allocation)
- Any suggested remediation or mitigation

We aim to acknowledge reports promptly and coordinate a fix and disclosure responsibly.

## Security Considerations for Integrators

Because `@micropasts/glb-model-viewer` renders 3D assets, spatial annotations, paradata records, and URL hash state in the browser, keep the following in mind when integrating it into an application:

- **Annotation & paradata content:** Sanitize or validate untrusted text, links, and custom `renderAnnotationBody` output before rendering. Avoid passing raw HTML strings into custom renderers without sanitization.
- **Shareable URL hashes (`#view=...` and `#annotations=...`):** URL hashes can be copied, bookmarked, or leaked via browser history and referrers. Do not encode confidential or sensitive data into URL hashes, and ensure host applications bound or validate decoded payloads.
- **Remote 3D models, textures, and decoders:** Only load `.glb`/`.gltf` assets, textures, and Draco/KTX2 decoders from trusted origins, enforce appropriate Content Security Policy (CSP) directives, and configure CORS headers carefully on asset servers.
- **Client-side exports:** Mesh (`.obj`, `.stl`), snapshot (`.png`), and turntable (`.webm`) exports run in the user's browser; set sensible file-size and mesh-complexity expectations for untrusted or user-uploaded models.