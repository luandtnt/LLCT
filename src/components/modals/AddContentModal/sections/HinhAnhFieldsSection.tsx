import { ContentFormData, HinhAnhFields } from '../../../../types/content';

interface HinhAnhFieldsSectionProps {
  formData: Partial<ContentFormData>;
  onFormDataChange: (data: Partial<ContentFormData>) => void;
  errors: Record<string, string>;
}

export function HinhAnhFieldsSection({ formData, onFormDataChange, errors }: HinhAnhFieldsSectionProps) {
  const specific = (formData.specific as HinhAnhFields) || {};

  const updateSpecific = (updates: Partial<HinhAnhFields>) => {
    onFormDataChange({
      ...formData,
      specific: { ...specific, ...updates } as any,
    });
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[20px]">
      <h4 className="text-[16px] font-semibold text-[#111827] mb-[16px]">
        Thông tin hình ảnh
      </h4>

      <div className="space-y-[16px]">
        {/* Ngày tạo/Ngày phát hành */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngày tạo <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="date"
            value={specific.creationDate || ''}
            onChange={(e) => updateSpecific({ creationDate: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
          {errors.creationDate && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.creationDate}</p>
          )}
        </div>

        {/* Loại hình ảnh */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Loại hình ảnh <span className="text-[#b9000e]">*</span>
          </label>
          <select
            value={specific.imageType || ''}
            onChange={(e) => updateSpecific({ imageType: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          >
            <option value="">Chọn loại hình ảnh</option>
            <option value="Ảnh chụp">Ảnh chụp</option>
            <option value="Infographic">Infographic</option>
            <option value="Sơ đồ">Sơ đồ</option>
            <option value="Bản đồ">Bản đồ</option>
            <option value="Ảnh scan">Ảnh scan</option>
            <option value="Khác">Khác</option>
          </select>
          {errors.imageType && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.imageType}</p>
          )}
        </div>

        {/* Chú thích ảnh */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Chú thích ảnh
          </label>
          <input
            type="text"
            value={specific.caption || ''}
            onChange={(e) => updateSpecific({ caption: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Mô tả ngắn gọn về hình ảnh"
          />
        </div>

        {/* Mô tả ảnh */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Mô tả ảnh
          </label>
          <textarea
            value={specific.altText || ''}
            onChange={(e) => updateSpecific({ altText: e.target.value })}
            rows={3}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Mô tả chi tiết nội dung hình ảnh cho accessibility và tìm kiếm"
          />
        </div>

        {/* Bộ sưu tập */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Bộ sưu tập
          </label>
          <input
            type="text"
            value={specific.collection || ''}
            onChange={(e) => updateSpecific({ collection: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Tên bộ sưu tập hoặc album"
          />
        </div>
      </div>
    </div>
  );
}
