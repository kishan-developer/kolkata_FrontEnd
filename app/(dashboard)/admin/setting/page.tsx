import { Settings, Key, Palette, Mail, Shield, Bell } from "lucide-react";

function Page() {
  return (
    <div className="space-y-6 mt-20">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Settings</h1>
        <p className="text-gray-600">Configure platform settings and integrations</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* API Keys */}
          <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Key className="w-6 h-6" />
              API Keys
            </h3>
            <div className="space-y-4">
              {[
                { name: "Income Tax Portal API", status: "active" },
                { name: "GST Portal API", status: "active" },
                { name: "MCA Portal API", status: "active" },
                { name: "Payment Gateway", status: "active" },
              ].map((api, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-[1rem]">
                  <div>
                    <p className="font-medium text-gray-900">{api.name}</p>
                    <p className="text-sm text-gray-600">••••••••••••1234</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-[1rem]">{api.status}</span>
                    <button className="text-[#2663eb] hover:text-[#1d4ed8] text-sm font-medium">Regenerate</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Settings */}
          <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6" />
              AI Configuration
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Document Processing Model</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-[1rem]">
                  <option>GPT-4 Vision (Recommended)</option>
                  <option>GPT-4</option>
                  <option>Custom Model</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confidence Threshold</label>
                <input type="range" min="0" max="100" defaultValue="85" className="w-full" />
                <p className="text-sm text-gray-600 mt-1">85% - Documents below this confidence require manual review</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto-approve high confidence filings</p>
                  <p className="text-sm text-gray-600">Filings with 95%+ confidence will be auto-approved</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2663eb] rounded" />
              </div>
            </div>
          </div>

          {/* Email/SMS Config */}
          <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Email & SMS Configuration
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Provider</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-[1rem]">
                  <option>SendGrid</option>
                  <option>AWS SES</option>
                  <option>Custom SMTP</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SMS Provider</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-[1rem]">
                  <option>Twilio</option>
                  <option>AWS SNS</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Branding */}
          <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Branding
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
                <div className="w-full h-20 bg-gray-100 rounded-[1rem] flex items-center justify-center">
                  <p className="text-gray-400">Upload Logo</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                <input type="color" defaultValue="#3B82F6" className="w-full h-10 rounded border border-gray-300" />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security
            </h3>
            <div className="space-y-3">
              {[
                "Two-Factor Authentication",
                "IP Whitelisting",
                "Session Timeout (30 min)",
                "Data Encryption",
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item}</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#2663eb] rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-gray-200 rounded-[1rem] p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Admin Notifications
            </h3>
            <div className="space-y-3">
              {[
                "New user signups",
                "Failed payments",
                "System errors",
                "Weekly reports",
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item}</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#2663eb] rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="px-6 py-3 border border-gray-300 rounded-[1rem] hover:bg-gray-50">Cancel</button>
        <button className="px-6 py-3 bg-[#2663eb] text-white rounded-[1rem] hover:bg-[#1d4ed8]">Save Changes</button>
      </div>
    </div>
  );
}


export default Page;