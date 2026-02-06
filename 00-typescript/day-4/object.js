function formatVulnerability(vuln) {
    var url = vuln.url;
    return "The Vulnerabilty ".concat(vuln.id, " has a ").concat(vuln.severity, " severity, find it here ").concat(url);
}
var authError = {
    id: '1',
    severity: 'low',
    url: 'login.com',
};
console.log(formatVulnerability(authError));
