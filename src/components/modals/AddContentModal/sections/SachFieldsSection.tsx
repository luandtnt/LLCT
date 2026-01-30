import { ContentFormData, SachFields } from '../../../../types/content';

interface SachFieldsSectionProps {
  formData: Partial<ContentFormData>;
  onFormDataChange: (data: Partial<ContentFormData>) => void;
  errors: Record<string, string>;
}

export function SachFieldsSection({ formData, onFormDataChange, errors }: SachFieldsSectionProps) {
  const specific = (formData.specific as SachFields) || {};

  const updateSpecific = (updates: Partial<SachFields>) => {
    onFormDataChange({
      ...formData,
      specific: { ...specific, ...updates } as any,
    });
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[20px]">
      <h4 className="text-[16px] font-semibold text-[#111827] mb-[16px]">
        Thông tin sách
      </h4>

      <div className="space-y-[16px]">
        {/* Năm xuất bản */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Năm xuất bản <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="number"
            value={specific.publishYear || ''}
            onChange={(e) => updateSpecific({ publishYear: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="2025"
            min="1900"
            max="2100"
          />
        </div>

        {/* Nhà xuất bản */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Nhà xuất bản <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="text"
            value={specific.publisher || ''}
            onChange={(e) => updateSpecific({ publisher: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="NXB Chính trị Quốc gia"
          />
        </div>

        {/* Ấn bản */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ấn bản
          </label>
          <input
            type="text"
            value={specific.edition || ''}
            onChange={(e) => updateSpecific({ edition: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Lần thứ 2"
          />
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            ISBN
          </label>
          <input
            type="text"
            value={specific.isbn || ''}
            onChange={(e) => updateSpecific({ isbn: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="978-604-0-00000-0"
          />
          {errors.isbn && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.isbn}</p>
          )}
        </div>

        {/* Nơi xuất bản */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Nơi xuất bản
          </label>
          <input
            type="text"
            value={specific.publishLocation || ''}
            onChange={(e) => updateSpecific({ publishLocation: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Hà Nội"
          />
        </div>

        {/* Có bản dịch */}
        <div>
          <label className="flex items-center gap-[8px] cursor-pointer">
            <input
              type="checkbox"
              checked={specific.hasTranslation || false}
              onChange={(e) => updateSpecific({ hasTranslation: e.target.checked })}
              className="w-[16px] h-[16px]"
            />
            <span className="text-[14px] text-[#111827]">Có bản dịch</span>
          </label>
        </div>

        {/* Translation fields */}
        {specific.hasTranslation && (
          <>
            <div>
              <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
                Người dịch
              </label>
              <input
                type="text"
                value={specific.translator || ''}
                onChange={(e) => updateSpecific({ translator: e.target.value })}
                className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
                  Ngôn ngữ gốc
                </label>
                <input
                  type="text"
                  value={specific.originalLanguage || ''}
                  onChange={(e) => updateSpecific({ originalLanguage: e.target.value })}
                  className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
                  placeholder="Tiếng Anh"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
                  Ngôn ngữ dịch
                </label>
                <input
                  type="text"
                  value={specific.translatedLanguage || ''}
                  onChange={(e) => updateSpecific({ translatedLanguage: e.target.value })}
                  className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
                  placeholder="Tiếng Việt"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
