import { ContentFormData, VideoFields } from '../../../../types/content';

interface VideoFieldsSectionProps {
  formData: Partial<ContentFormData>;
  onFormDataChange: (data: Partial<ContentFormData>) => void;
  errors: Record<string, string>;
}

export function VideoFieldsSection({ formData, onFormDataChange, errors }: VideoFieldsSectionProps) {
  const specific = (formData.specific as VideoFields) || {};

  const updateSpecific = (updates: Partial<VideoFields>) => {
    onFormDataChange({
      ...formData,
      specific: { ...specific, ...updates } as any,
    });
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-[20px]">
      <h4 className="text-[16px] font-semibold text-[#111827] mb-[16px]">
        Thông tin video
      </h4>

      <div className="space-y-[16px]">
        {/* Ngày phát hành */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngày phát hành <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="date"
            value={specific.releaseDate || ''}
            onChange={(e) => updateSpecific({ releaseDate: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
          {errors.releaseDate && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.releaseDate}</p>
          )}
        </div>

        {/* Nền tảng/Trang đăng */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Nền tảng <span className="text-[#b9000e]">*</span>
          </label>
          <input
            type="text"
            value={specific.platform || ''}
            onChange={(e) => updateSpecific({ platform: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="YouTube, VTV, Facebook..."
          />
          {errors.platform && (
            <p className="text-[12px] text-[#b91c1c] mt-[4px]">{errors.platform}</p>
          )}
        </div>

        {/* Tên kênh/Tài khoản */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Tên kênh
          </label>
          <input
            type="text"
            value={specific.channelName || ''}
            onChange={(e) => updateSpecific({ channelName: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Tên kênh"
          />
        </div>

        {/* Sự kiện/Chương trình */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Sự kiện
          </label>
          <input
            type="text"
            value={specific.eventName || ''}
            onChange={(e) => updateSpecific({ eventName: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Tên sự kiện hoặc chương trình"
          />
        </div>

        {/* Địa điểm */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Địa điểm
          </label>
          <input
            type="text"
            value={specific.location || ''}
            onChange={(e) => updateSpecific({ location: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
            placeholder="Hà Nội"
          />
        </div>

        {/* Ngôn ngữ */}
        <div>
          <label className="block text-[14px] font-medium text-[#111827] mb-[6px]">
            Ngôn ngữ
          </label>
          <input
            type="text"
            value={specific.language || formData.common?.language || 'Tiếng Việt'}
            onChange={(e) => updateSpecific({ language: e.target.value })}
            className="w-full px-[12px] py-[8px] border border-[#e5e7eb] rounded-[4px] text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
